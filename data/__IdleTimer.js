module.exports = {
file: './src/js/helpers/IdleTimer.js',
content: `// Idle Timer
class IdleTimer {
    constructor(callback, interval) {
        this.idleTimer = null
        this.timer(callback, interval)
    }

    timer(callback, interval=500) {
        clearTimeout(this.idleTimer)
        this.idleTimer = setTimeout(callback, interval)
    }
}

export default IdleTimer

/*! 
!!! This component creates a half second (or chosen 
!!! interval) timer that resets itself every time it's
!!! called before firing a callback function This allows 
!!! for rapid user inputs without running code repeatedly. 

!!! For example, if you have an AJAX cart with quantity 
!!! selectors, this component will allow the user to click
!!! change the quantity rapidly but making only 1 request.

!!! The callback function only gets called when the interval 
!!! is allowed to complete. If the same action happens before 
!!! the interval completes, then the interval will be cleared.

    // Example:
    new IdleTimer(() => {
        await axios.post('/cart/update.js', {
            updates: {
                [id]: qty
            }
        })
    })

!!! */`}