const students = [
 { name: "Aman", marks: 85, subject: "Math" },
 { name: "Riya", marks: 42, subject: "Science" },
 { name: "Kabir", marks: 67, subject: "Math" },
 { name: "Sneha", marks: 91, subject: "English" },
 { name: "Arjun", marks: 38, subject: "Science" },
 { name: "Meera", marks: 74, subject: "Math" },
 { name: "Rohan", marks: 59, subject: "English" },
 { name: "Diya", marks: 88, subject: "Science" },
 { name: "Kunal", marks: 46, subject: "Math" },
 { name: "Isha", marks: 95, subject: "English" }
];

const result = {
 pass: students.filter(s => s.marks >= 50).length,
 fail: students.filter(s => s.marks < 50).length
};

console.log(result);

const average =
 students.reduce((total, s) => total + s.marks, 0) / students.length;

console.log("Average Marks:", average);

const topper = students.reduce((top, s) =>
 s.marks > top.marks ? s : top
);

console.log("Topper:", topper);

const groupBySubject = students.reduce((group, s) => {
 if (!group[s.subject]) {
  group[s.subject] = [];
 }
 group[s.subject].push(s);
 return group;
}, {});

console.log("Grouped by Subject:", groupBySubject);