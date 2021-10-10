
enum sort {ASC, DESC}; //This type of enum assigned automatically an incremental index to the enum property
enum permission {FULL = 'FULL', READ = 'READ', WRITE = 'WRITE', VIEW = 'VIEW'};
enum role {ADMIN = -5, SALES = -1, SUPPORT = -10};

const person: {
    name: string;
    age: number;
    hobbies: string[], //this declaration defines an Array will only contain String index values
    access: [number, string]; //this is called Tuple available in typescript only, specified specific number of index that an Array will contain
    bookmarks: any[] //can contain mix datatype values
} = {
    name: 'William',
    age: 31,
    hobbies: ['Sleep', 'Eat', 'Code'],
    access: [role.ADMIN, permission.FULL],
    bookmarks: [1, 'Charles Dickens', 'Oliver Twist', 201, {a: 'ABC', b: 'DEF'}]
};

const favoriteSports: string[] = ['Basketball', 'Football'];

for (const favoriteSport of favoriteSports) {
    console.log(favoriteSport.toLowerCase());
}
console.log(person.name);