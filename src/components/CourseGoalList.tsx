import { CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
import { type ReactNode } from 'react'

type CourseGoalListType = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({ goals,onDeleteGoal }: CourseGoalListType) {
    if(goals.length === 0) {
        return (
            <InfoBox mode="hint">
                You have no course goals yet. Start adding some.
            </InfoBox>
        );
    }

    let warningBox: ReactNode;

    if(goals.length > 4) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
                Adding too many goals!!
            </InfoBox>
        );
    }

    return (
        <>
            { warningBox }  
            <ul>
                { 
                    goals.map(goal => {
                        return <li key={goal.id}>
                            <CourseGoal id={goal.id} title={ goal.title } desc={goal.desc} onDelete={onDeleteGoal} >
                                { goal.desc }
                            </CourseGoal>
                        </li>
                        }
                    ) 
                }
            </ul>
        </>
    );
}