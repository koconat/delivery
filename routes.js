let x;
let maps = document.getElementsByTagName("iframe");
function fun1() {
    for (let i = 0; i < maps.length; i++)
    {
        maps[i].style.display = 'none';
        }
    let sel = document.getElementById('myWay').selectedIndex;
    switch (sel) {
      case 1:
          x = document.getElementById("way1");
            x.style.display = 'block';            
          break;
      case 2:
          x = document.getElementById("way2");
            x.style.display = 'block';
          break;        
    }
}