export default interface IRepository<T>{
    GetAll: () => Promise<T[]>;
    Add: (value: T) => Promise<void>;
    Remove: (id: number) => Promise<void>;
    GetById: (id: number) => Promise<T>;
}