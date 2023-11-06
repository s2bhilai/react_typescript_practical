
//import { type ReactNode } from 'react';
// interface CourseGoalProps {
//     title: string;
//     desc: string;
//     children: ReactNode;
// }

import { type PropsWithChildren } from 'react';

type CourseGoalProps = PropsWithChildren<{ id:number, title: string; desc: string;onDelete: (id: number) => void; }>;

export default function CourseGoal({id,title,desc,children,onDelete}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            <button onClick={() => onDelete(id)} >Delete</button>
            <div>
            { children }
            </div>            
        </article>
    );
}

//Another way using FC- Functional Component - type FC
// const CourseGoal1: FC<CourseGoalProps> = ({title,desc,children}) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{desc}</p>
//             </div>
//             <button>Delete</button>
//             <div>
//             { children }
//             </div>            
//         </article>
//     );
// }