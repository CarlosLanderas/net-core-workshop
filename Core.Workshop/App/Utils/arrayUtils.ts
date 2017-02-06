export function reduceArray<T, T2>(collection : Array<T>, field: (obj: T) => any): Array<any> {
      return collection.reduce( (prev,curr) => {
        let memberValue = field(curr);
        prev.push(memberValue);
        return prev;
    },[]);
}

