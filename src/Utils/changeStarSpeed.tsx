export function changeStarSpeed(speedMultiplier: string) {
    document.documentElement.style.setProperty("--star-speed-multiplier", speedMultiplier)

    setTimeout( () => {
        document.documentElement.style.setProperty("--star-speed-multiplier", "1")
    }, 400)
}