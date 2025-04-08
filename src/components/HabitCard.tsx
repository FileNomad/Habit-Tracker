import { useState } from "react";

type HabitCardProps = {
    name: string;
    isDone?: boolean;
}

function HabitCard({ name, isDone }: HabitCardProps) {
    // class for defining a new habit
    // name of habit, done/not done, quantity (if relevant), notes
    const [done, setDone] = useState(isDone ?? false);
    const [notes, setNotes] = useState("");
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="habit-card">
            
            <h2>{name}</h2>
            <label>
                <input
                type="checkbox"
                checked={done}
                onChange={(e) => setDone(e.target.checked)}
                />
                Done
            </label>

            {isDone && (
                <div>
                    <label>
                        Quantity:
                        <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </label>
                </div>
            )}
            <div>
                <label>
                    Notes:
                    <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
}

export default HabitCard;