import octokit from './octokit';

const MEEPS_REPO = {
    owner: 'moreeyesplz',
    repo: 'meeps'
};

class Issue {
    data_: any = null;
    user_: string = '';
    commit_url_: string = '';
    commit_message_: string = '';

    constructor(data: any) {
        const lines = data.body.split('\n');
        if (lines.length !== 3) {
            return;
        }
        this.data_ = data;
        this.user_ = lines[0];
        this.commit_url_ = lines[1];
        this.commit_message_ = atob(lines[2]);
    }

    get id(): number {
        return this.data_.id;
    }

    get url(): string {
        return this.data_.url;
    }

    get labels(): string[] {
        return this.data_.labels.map((label:any) => label.name);
    }

    get user(): string {
        return this.user_;
    }

    get avatar(): string {
        return this.data_.user.avatar_url;
    }

    get user_url(): string {
        return this.data_.user.html_url;
    }

    get commit_url(): string {
        return this.commit_url_;
    }

    get commit_message(): string {
        return this.commit_message_;
    }

    get created_at(): string {
        return this.data_.created_at;
    }
}

export default class Issues {
    issues: { [id: number]: Issue } = {};

    async fetch(labels: string[] = []) {
        const { data } = await octokit.issues.listForRepo({
            ...MEEPS_REPO,
            state: 'open',
            labels,
            sort: 'created',
            direction: 'desc',
        });
        const ids: number[] = [];
        for (let i = 0; i !== data.length; ++i) {
            const iss = new Issue(data[i]);
            if (iss.data_ !== null) {
                this.issues[iss.id] = iss;
                ids.push(iss.id);
            }
        }
        return ids;
    }

    get(id: number): Issue | null {
        return this.issues[id];
    }
};