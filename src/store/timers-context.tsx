import { ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

//creating a custom hook so that when we use TimersContext in another components 
//it should not be showing null as type bcoz If we use directly TimersContext then in 
//components it's type will be TimersContextValue | null
export function useTimersContext() {
    const timersCtx = useContext(TimersContext);

    //checking null condition as now the return type will not include null
    if(timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }

    return timersCtx;
}

type TimersContextProviderProps = {
    children: ReactNode
}

type StartTimersAction = {
    type: 'START_TIMERS'
}

type StopTimersAction = {
    type: 'STOP_TIMERS'
} 

type AddTimersAction = {
    type: 'ADD_TIMER';
    payload: Timer
} 

type Action = StartTimersAction | StopTimersAction | AddTimersAction;

function timersReducer(state: TimersState,action: Action): TimersState {
    if(action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        }
    }

    if(action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }

    if(action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers:[
                ...state.timers,
                {
                   name: action.payload.name,
                   duration: action.payload.duration
                }
            ]
        }
    }

    return state;
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {

    const [timersState, dispatch] =  useReducer(timersReducer,initialState);

    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({ type: 'ADD_TIMER', payload: timerData });
        },
        startTimers() {
            dispatch({ type: "START_TIMERS" });
        },
        stopTimers() {
            dispatch({ type: 'STOP_TIMERS' });
        }
    };

    return (
        <TimersContext.Provider value={ ctx }>
            {children}
        </TimersContext.Provider>
    )
}