// sum = 0
// for (let i = 0; i <= 5; i++) {
//     sum +- i
//     console.log(i);
// }

// console.log(sum);

// for (let i = 1; i <= 100; i++) {
//     if (i > 20 && i % 6 === 0) {
//         console.log(i);
//         break;
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

let studentsCount = +prompt("Enter the number of students:");

if (studentsCount > 0) {
    let sum = 0,
        highLevel = 0,
        otherLevel = 0;
        minGrade = 12,
        maxGrade = 1,
        av = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let grade = +prompt(`Enter grade for student #${i} from 1 to 12`);

        if (!(grade >= 1 && grade <= 12)) {
            alert("error");
            i--;
            continue;
        }

        sum += grade;

        if (grade >= 10) {
            highLevel++;
        } else {
            otherLevel++;
        }
        if (grade < minGrade) {
            minGrade = grade;
        }
        if (grade > maxGrade) {
            maxGrade = grade;
        }
    }

    av = sum / studentsCount;

    alert(`Average grade: ${av.toFixed(2)}\nHighest grade: ${maxGrade}\nLowest grade: ${minGrade}\nNumber of students with high level grades (10-12): ${highLevel}\nNumber of students with other level grades (1-9): ${otherLevel}`);
}
