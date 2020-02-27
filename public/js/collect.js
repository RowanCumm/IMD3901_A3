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
        let changecube = document.querySelector('#change').getAttribute('material').color;
        let orb = Context_AF.el.getAttribute('material').color;
        console.log(changecube);
        console.log(Context_AF.el.getAttribute('material').color);


        if (changecube === orb)
        {
            Context_AF.el.parentNode.removeChild(Context_AF.el);
        }
        
    }
});