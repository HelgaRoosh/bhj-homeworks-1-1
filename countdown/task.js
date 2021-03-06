const count = document.getElementById('timer');
//Переменные, которые в дальнейшем не будут переопределены,
//лучше объявлять через const, так вы даете понять, что это константы. 
//Это будет более семантически верным и поможет избежать ошибок на этапе разработки.(от преподавателя)

//(+count.textContent / 3600) + ':' + (+count.textContent / 60) + ':' + +count.textContent
let count_textContent = +count.textContent;

let timer = () => {
    count_textContent = count_textContent - 1;
    if(count_textContent === -1) {
      count.textContent = '00:00:00';
      alert('Вы победили в конкурсе!');
      clearInterval(interval);
    }
    //Реализуйте таймер, отсчитывающий оставшееся время в формате hh:mm:ss
    let recordTime = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            if (number >= 60) {
                if (number % 60 <10) {
                    return '0' + number % 60;
                }
                return number % 60;
            }
            return number;
        }
    let hour = recordTime(Math.floor(count_textContent / 3600));
    let minutes = recordTime(Math.floor(count_textContent / 60));
    let seconds = recordTime(count_textContent);
    count.textContent =  hour + ':' + minutes + ':' + seconds;
    //раелизован с учетом того что в task.html время будет задаваться в секундах, допустим 3664сек
}
let interval = setInterval(timer, 1000);
