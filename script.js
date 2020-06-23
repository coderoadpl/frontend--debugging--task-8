const students = [
    {
        name: 'Student 1',
        marks: ['5', '4', '6']
    },
    {
        name: 'Student 2',
        marks: ['1', '2', '2', '3']
    },
    {
        name: 'Student 3',
        marks: []
    },
]

const calculateSum = function (numbers) {

    let sum = 0

    console.groupCollapsed('Partials')

    for (let i = 0; i < numbers.length; i++) {
        const number = Number(numbers[i])
        sum = sum + number

        console.log(sum)
    }

    console.groupEnd()

    return sum

}

const calculateAverage = function (numbers) {

    const sum = calculateSum(numbers)
    const length = numbers.length

    if (length === 0) throw new Error('You can\'t divide by 0!')

    return sum / length

}

const calculateStudentsAverages = function (students) {

    const addAverageToStudent = function (student) {

        console.group(student.name)

        let average = 0
        try {
            average = calculateAverage(student.marks)
        } catch (error) {
            console.warn('Student do not have any marks!')
            average = 0
        }

        console.groupEnd()

        const studentResults = {
            name: student.name,
            marks: student.marks.slice(),
            average: Math.round(average * 100) / 100
        }

        return studentResults
    }

    const studentsWithAverages = students.map(addAverageToStudent)

    return studentsWithAverages

}

try {
    const results = calculateStudentsAverages(students)
    console.table(results)
} catch (error) {
    console.error(error)
}