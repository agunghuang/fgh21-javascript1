function calculateAverageGrade(scores) {
    for (let subject in scores) {
        if (scores[subject] === null || scores[subject] === undefined || scores[subject] < 0 || scores[subject] > 100) {
            return `Nilai ${subject} tidak valid atau tidak diisi.`;
        }
    }

    const total = scores.BahasaIndonesia + scores.BahasaInggris + scores.Matematika + scores.IPA;
    const average = total / 4;

    let grade;
    if (average >= 90 && average <= 100) {
        grade = 'A';
    } else if (average >= 80 && average < 90) {
        grade = 'B';
    } else if (average >= 70 && average < 80) {
        grade = 'C';
    } else if (average >= 60 && average < 70) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    return `Rata-rata: ${average}, Grade: ${grade}`;
}

const scores = {
    BahasaIndonesia: 85,
    BahasaInggris: 90,
    Matematika: 78,
    IPA: 92
};

const result = calculateAverageGrade(scores);
console.log(result);
