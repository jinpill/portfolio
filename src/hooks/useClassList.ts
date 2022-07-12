const useClassList = (...classes: string[]) => {
    const classSet = new Set<string>();
    Array.from(classes).forEach(className => classSet.add(className));

    const join = () => {
        return Array.from(classSet).join(" ");
    }

    const add = (className: string) => {
        classSet.add(className);
    }

    const remove = (className: string) => {
        classSet.delete(className);
    }

    const contains = (className: string) => {
        return classSet.has(className);
    }

    return {
        join,
        add,
        remove,
        contains,
        get length() {
            return classSet.size;
        }
    }
}

export default useClassList;