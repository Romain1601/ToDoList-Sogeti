export class TodoModel {
    constructor(
        public id: number,
        public title: string,
        public state: string,
        public description: string,
        public style: string,
    ) {
    }
}