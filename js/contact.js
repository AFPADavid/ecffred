/////////////////////////////////////////////////////////////////////////
    /////// Animation Bouton envoi Demande de formulaires /////////////// 

    let c = document.getElementById('canvas');
    let ctx = c.getContext('2d');
    let btn = document.getElementsByClassName('btn')[0];
    
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    
    let mouseX = c.width / 2;
    let mouseY = c.height / 2;
    let txtPosition = 0;
    
    let particles = [];
    
    btn.addEventListener('mouseup', function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        createParticles();
        changeText();
    });
    
    setTimeout(function(){
        createParticles();
    }, 250);
    
    draw();
    
    function draw(){
        
        drawBg();
        incParticles();
        drawParticles();
        
        window.requestAnimationFrame(draw);
        
    }
    
    function drawBg(){
        ctx.rect(0, 0, c.width, c.height);
        ctx.fillStyle = "rgb(40, 45, 50)";
        ctx.fill();
    }
    
    function drawParticles(){
        for(i = 0; i < particles.length; i++){
            ctx.beginPath();
            ctx.arc(particles[i].x,
                        particles[i].y,
                        particles[i].size,
                        0,
                        Math.PI * 2);
            ctx.fillStyle = particles[i].color;
            ctx.closePath();
            ctx.fill();
        }
    }
    
    function incParticles(){
        for(i = 0; i < particles.length; i++){
            particles[i].x += particles[i].velX;
            particles[i].y += particles[i].velY;
            
            particles[i].size = Math.max(0, (particles[i].size - .05));
            
            if(particles[i].size === 0){
                particles.splice(i, 1);
            }
        }
    }
    
    function createParticles(){
        for(i = 0; i < 30; i++){
            particles.push({
                x: mouseX,
                y: mouseY,
                size: parseInt(Math.random() * 10),
                color: 'rgb(' + ranRgb() + ')',
                velX: ranVel(),
                velY: ranVel()
            });
        }
    }
    
    function ranRgb(){
        let colors = [
            '255, 122, 206',
            '0, 157, 255',
            '0, 240, 168',
            '0, 240, 120'
        ];
        
        let i = parseInt(Math.random() * 10);
        
        return colors[i];
    }
    
    function ranVel(){
        let vel = 0;
        
        if(Math.random() < 0.5){
            vel = Math.abs(Math.random());
        } else {
            vel = -Math.abs(Math.random());
        }
                
        return vel;
    }
    
    // Text
    
    let btnTxt = [
        'Envoyer votre mail',
        'C \' est parti!',
        'Oui! la demande est partie',
        ' T \' aimerais que je te clique ? ',
        'Allez Stop !'
    ];
    
    function changeText(){
        if(txtPosition !== btnTxt.length){
            btn.innerHTML = btnTxt[txtPosition];
            txtPosition += 1;
        }
    }