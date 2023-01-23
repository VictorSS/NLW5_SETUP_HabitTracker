import { generateDatesFromYearBeginning } from "../Utils/generate-dates-from-year-begining"
import { HabitDayBox } from "./HabitDayBox"

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

const sumaryDates = generateDatesFromYearBeginning()

const MinSummaryDateSize = 18 * 7
const amountOfDaysToFill = MinSummaryDateSize - sumaryDates.length



export function SummaryTable() {
    return (
        <div className="w-screen flex">
            <div className=" grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDays, i) => {
                    return (
                        <div key={`${weekDays}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
                            {weekDays}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {sumaryDates.map(date => {
                    return (
                        <HabitDayBox
                            key={date.toString()}
                            amount={5}
                            completed={Math.round(Math.random() * 5)}
                            />)
                })}

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (<div key={i} className="h-10 w-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-70 cursor-not-allowed" />)
                })}


            </div>
        </div>
    )
}