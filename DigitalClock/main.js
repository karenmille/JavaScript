
      function runClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var timeString = hours + ':' + minutes + ':' + seconds;
        document.timeForm.timeNow.value = timeString;
        setTimeout("runClock()",1000);
        document.getElementById('clock').innerHTML = timeString;
        
      }
      