AFRAME.registerComponent( 'collect',{
    init : function()
    {
        console.log('init component');

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
                        
            Context_AF.collectOrb();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    
    },
    collectOrb: function() {
        const Context_AF = this;
        let collectCount = parseInt(document.querySelector('#change').getAttribute('text').value);
        let changecube = document.querySelector('#change').getAttribute('material').color;
        let orb = Context_AF.el.getAttribute('material').color;
        console.log(collectCount);
        console.log(Context_AF.el.getAttribute('material').color);

        if (Context_AF.el.getAttribute('id') != 'BOTH_WIN'&&Context_AF.el.getAttribute('id') != 'ONLY_YOU_WIN'){
            if (changecube === orb)
            {
                collectCount= collectCount+1;
                document.querySelector('#change').setAttribute('text','value', collectCount);
                Context_AF.el.parentNode.removeChild(Context_AF.el);
            }
        }
        else if (document.querySelector('#change').getAttribute('text').value != ':)' && document.querySelector('#change').getAttribute('text').value != ':3') {
            if(Context_AF.el.getAttribute('id') == 'BOTH_WIN'){
                let WINNERSCREEN = document.createElement('a-entity');
                WINNERSCREEN.setAttribute('geometry', "primitive: plane; width: 10.0; height: 10.0");
                WINNERSCREEN.setAttribute('text', 'value', "You and your controller have won! Congrats");
                WINNERSCREEN.setAttribute('position', '2 3 -42');
                WINNERSCREEN.setAttribute('material','color: #f38aff')
                let scene = document.querySelector('a-scene');
                scene.appendChild(WINNERSCREEN);
                document.querySelector('#change').setAttribute('text','value', ':)');
                Context_AF.el.parentNode.removeChild(Context_AF.el);
            }

            else if(Context_AF.el.getAttribute('id') == 'ONLY_YOU_WIN'){
                let winSCREEN = document.createElement('a-entity');
                winSCREEN.setAttribute('geometry', "primitive: plane; width: 10.0; height: 10.0");
                winSCREEN.setAttribute('text', 'value', "Only you have won, good job");
                winSCREEN.setAttribute('position', '2 3 -42');
                winSCREEN.setAttribute('material','color: #f38aff')
                let scene = document.querySelector('a-scene');
                scene.appendChild(winSCREEN);
                document.querySelector('#change').setAttribute('text','value', ':3');
                Context_AF.el.parentNode.removeChild(Context_AF.el);
            }
        }

        
    }
});