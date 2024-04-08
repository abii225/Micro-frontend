
    export type RemoteKeys = 'Second_Provider\button' | 'Second_Provider\secondcontainer';
    type PackageType<T> = T extends 'Second_Provider\secondcontainer' ? typeof import('Second_Provider\secondcontainer') :T extends 'Second_Provider\button' ? typeof import('Second_Provider\button') :any;