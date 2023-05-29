import { useEffect, useRef, useState } from "react"
import { reels1, reels2, reels3 } from "../../app/utils/constants"
import { v4 as uuid } from "uuid"
import { toast } from "react-toastify"
import { useAppDispatch } from "../../app/hooks"
import { setCoins } from "./slotMachineSlice"

const SlotMachine = () => {
    const coins = JSON.parse(sessionStorage.getItem("coins")!) as number
    const reel1Ref = useRef<HTMLDivElement>(null)
    const reel2Ref = useRef<HTMLDivElement>(null)
    const reel3Ref = useRef<HTMLDivElement>(null)
    const [rolling, setRolling] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // change reels places randomly, when the game initiates
        changeReelsRandomly()
    }, [])

    const checkAwards = (fruit1: string, fruit2: string, fruit3: string) => {
        if (fruit1 === "🍏" && fruit2 === "🍏" && fruit3 === "🍏") {
            dispatch(setCoins(coins + 20))
            return toast.success("You won 20 Coins !")
        } else if (fruit1 === "🍒" && fruit2 === "🍒" && fruit3 === "🍒") {
            dispatch(setCoins(coins + 50))
            return toast.success("You won 50 Coins !")
        } else if (fruit1 === "🍌" && fruit2 === "🍌" && fruit3 === "🍌") {
            dispatch(setCoins(coins + 15))
            return toast.success("You won 15 Coins !")
        } else if (fruit1 === "🍋" && fruit2 === "🍋" && fruit3 === "🍋") {
            dispatch(setCoins(coins + 3))
            return toast.success("You won 3 Coins !")
        } else if (
            (fruit1 === "🍒" && fruit2 === "🍒") ||
            (fruit2 === "🍒" && fruit3 === "🍒")
        ) {
            dispatch(setCoins(coins + 40))
            return toast.success("You won 40 Coins !")
        } else if (
            (fruit1 === "🍏" && fruit2 === "🍏") ||
            (fruit2 === "🍏" && fruit3 === "🍏")
        ) {
            dispatch(setCoins(coins + 10))
            return toast.success("You won 10 Coins !")
        } else if (
            (fruit1 === "🍌" && fruit2 === "🍌") ||
            (fruit2 === "🍌" && fruit3 === "🍌")
        ) {
            dispatch(setCoins(coins + 5))
            return toast.success("You won 5 Coins !")
        }
    }

    // it changed reels places randomly to take more time for reels animation
    const changeReelsRandomly = () => {
        if (reel1Ref.current && reel2Ref.current && reel3Ref.current) {
            const randomTop = Math.floor(Math.random() * 8) * 60
            reel1Ref.current.style.top = `-${randomTop}px`
            reel2Ref.current.style.top = `-${randomTop}px`
            reel3Ref.current.style.top = `-${randomTop}px`
        }
    }

    const play = () => {
        if (coins <= 0) {
            return toast.error("You don't have any coins !")
        }

        changeReelsRandomly()
        setRolling(true)
        dispatch(setCoins(coins - 1))

        setTimeout(() => {
            if (reel1Ref.current && reel2Ref.current && reel3Ref.current) {
                const reels1Result = triggerSlotRotation(
                    reel1Ref.current,
                    reels1,
                )

                const reels2Result = triggerSlotRotation(
                    reel2Ref.current,
                    reels2,
                )

                const reels3Result = triggerSlotRotation(
                    reel3Ref.current,
                    reels3,
                )

                checkAwards(reels1Result, reels2Result, reels3Result)
            }

            setRolling(false)
        }, 500)
    }

    // it returns choosen item of reel and set top style of item of the reel
    const triggerSlotRotation = (ref: HTMLDivElement, reels: string[]) => {
        function setTop(top: number) {
            ref.style.top = `${top}px`
        }

        // to get reel items of a reel
        const options = ref.children
        const randomNumber = Math.floor(Math.random() * 8)
        const choosenOption = options[randomNumber]

        setTop(-(choosenOption as HTMLSpanElement).offsetTop)
        return reels[randomNumber]
    }

    return (
        <div>
            <div className="w-full flex items-center justify-end mb-12">
                <span className="py-3 px-12 bg-yellow-300 rounded-md text-xl">
                    {coins} Coins
                </span>
            </div>
            <div className="flex mb-8 relative overflow-hidden h-[60px] justify-center gap-8 w-[244px] mx-auto">
                <div className="left-0 absolute text-6xl h-[60px] ">
                    <div
                        ref={reel1Ref}
                        className="flex flex-col relative slot-machine-reel"
                    >
                        {reels1.map((item) => (
                            <span className="" key={uuid()}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col absolute text-6xl h-[60px] ">
                    <div
                        ref={reel2Ref}
                        className="flex flex-col relative slot-machine-reel"
                    >
                        {reels2.map((item) => (
                            <span className="" key={uuid()}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="right-0 absolute text-6xl h-[60px]">
                    <div
                        ref={reel3Ref}
                        className="flex flex-col relative slot-machine-reel"
                    >
                        {reels3.map((item) => (
                            <span className="" key={uuid()}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button
                    disabled={rolling}
                    className="w-60 h-12 bg-gray-100 disabled:bg-slate-700"
                    onClick={play}
                >
                    {rolling ? "Rolling" : "Play"}
                </button>
            </div>
        </div>
    )
}

export default SlotMachine
