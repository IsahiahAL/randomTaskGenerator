let task = document.getElementById('task');
const newTask = document.getElementById('newTask');
let taskList = ['30 min walk', '30 min bible study', 'full body stretch', 'cardio', 'workout', 'healthy snack', 'healthy meal', '30 min free code camp',
                '3o min ztm', 'sweep', 'vacuum', 'call mom', 'call dad', 'call andrew', 'movie maker', '30 min piano', 'walk halo', 'clean cat litter',
                'sweep and mop', 'learn a card trick', 'say five nice things to cheyanne', '30 min easyway read', '30 min easyway audio', 'watch a full episode of FWD',
                'take a shower', 'drink some tea', '30 min Random Task Generator', '30 min bootstrap tutorial'
];





function generateNewTask (){
    let number = Math.floor(Math.random() * taskList.length);
    task.innerHTML = taskList[number];
    console.log(number);

}




newTask.addEventListener('click', generateNewTask);

