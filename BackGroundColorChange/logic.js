document.addEventListener('readystatechange', (event)=>{
    
    if(event.target.readyState === "complete")
    {
        console.log('complete');

        const div = document.createElement("div");

        const body = document.querySelector('body');

        console.log(body);

        body.append(div);

        div.classList = "value"

        div.innerHTML = '<h2></h2><br><button class="btn">Click Me</button>';

        const h2 = div.querySelector('h2');

        h2.className = "h2";

        console.log(div);

        const myColor = ['white',"red", 'blue', 'green', 'yellow', 'grey', 'orange', 'aqua', 'chartreuse', 'brown', 'violet', 'purple', 'pink', 'orangered'];

        const button = div.querySelector('button');

        console.log(button);
        
        h2.textContent = `BackgroundColor = ${myColor[0]}`

        body.style.backgroundColor = `${myColor[0]}`;

        button.addEventListener('click',  function change()
        {
            const random = Math.floor(Math.random()*myColor.length);

            h2.textContent = `BackgroundColor = ${myColor[random]}`

            body.style.backgroundColor = `${myColor[random]}`;
            
        });
        
    }
});