(function(){

    const q = (selector) => document.querySelector(selector);

    const gameContainer = q('#gameContainer');

    const initialDimensions = {width: parseInt(gameContainer.style.width, 10), height: parseInt(gameContainer.style.height, 10)};
    gameContainer.style.width = '100%';
    gameContainer.style.height = '100%';

    let gCanvasElement = null;

    const getCanvasFromMutationsList = (mutationsList) => {
        for (let mutationItem of mutationsList){
            for (let addedNode of mutationItem.addedNodes){
                if (addedNode.id === '#canvas'){
                    return addedNode;
                }
            }
        }
        return null;
    }

    const registerCanvasWatcher = () => {
        let debounceTimeout = null;
        const debouncedSetDimensions = () => {
            if (debounceTimeout !== null) {
                clearTimeout(debounceTimeout);
            }
        }
        window.addEventListener('resize', false);
    }

    window.UnityLoader.Error.handler = function () { }

    const i = 0;
    new MutationObserver(function (mutationsList) {
        const canvas = getCanvasFromMutationsList(mutationsList)
        if (canvas){
            gCanvasElement = canvas;
            registerCanvasWatcher();

            new MutationObserver(function (attributesMutation) {
                this.disconnect();
                q('.bg').classList.add('hide');
            }).observe(canvas, {attributes:true});

            this.disconnect();
        }
    }).observe(gameContainer, {childList:true});

})();