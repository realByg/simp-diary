import React, {useState, useEffect} from 'react'
import {diaries} from '../data/diaries'
import {weathers} from '../data/weathers'

export default function Diary() {
    const [date, setDate] = useState('2020-09-02')
    const [weather, setWeather] = useState('晴')
    const [diary, setDiary] = useState('')

    useEffect(() => {
        const start = new Date(2012, 0, 1)
        const end = new Date()
        setDate(
            new Date(
                start.getTime() + Math.random() * (
                    end.getTime() - start.getTime()
                )
            ).toISOString().substr(0, 10).toString()
        )

        setWeather(
            weathers[Math.floor(Math.random() * weathers.length)]
        )

        setDiary(
            diaries[Math.floor(Math.random() * diaries.length)]
        )
    }, [])

    return (
        <div className="diaryContent">
            <div className="title">{date} {weather}</div>
            <div className="diary">{diary}</div>
        </div>
    )
}
