const workoutPlans = {
    monday: [
        { name: "Bench Press", details: "Sets: 4", video: "bench_press.mp4" },
        { name: "Declined Bench Press", details: "Sets: 3", video: "declined_bench_press.mp4" },
        { name: "Inclined Bench Press", details: "Sets: 3", video: "inclined_bench_press.mp4" },
        { name: "Pec-Dec Fly", details: "Sets: 3", video: "pec_dec_fly.mp4" },
        { name: "Cable Rope Pushdowns", details: "Sets: 3", video: "cable_rope_pushdowns.mp4" },
        { name: "Barbell Skullcrusher", details: "Sets: 3", video: "barbell_skullcrusher.mp4" },
        { name: "Single Hand Overhead Extension", details: "Sets: 3", video: "single_hand_overhead_extension.mp4" }
    ],
    tuesday: [
        { name: "Lat Pulldown", details: "Sets: 3", video: "lat_pulldown.mp4" },
        { name: "T-Bar Row", details: "Sets: 3", video: "t_bar_row.mp4" },
        { name: "Wide Grip Seated Rows", details: "Sets: 3", video: "wide_grip_seated_rows.mp4" },
        { name: "Single Hand Dumbbell Row", details: "Sets: 3", video: "single_hand_dumbbell_row.mp4" },
        { name: "Dumbbell Curl", details: "Sets: 3", video: "dumbbell_curl.mp4" },
        { name: "777 Barbell Curl", details: "Sets: 3", video: "777_barbell_curl.mp4" },
        { name: "Cable Rope Hammer Curl", details: "Sets: 3", video: "cable_rope_hammer_curl.mp4" }
    ],
    wednesday: [
        { name: "Dumbbell Press", details: "Sets: 3", video: "dumbbell_press.mp4" },
        { name: "Lateral Raise", details: "Sets: 3", video: "lateral_raise.mp4" },
        { name: "Cable Upright Row", details: "Sets: 3", video: "cable_upright_row.mp4" },
        { name: "Cable Rope Face Pull", details: "Sets: 3", video: "cable_rope_face_pull.mp4" },
        { name: "Half + Full Crunches", details: "Sets: 3", video: "half_full_crunches.mp4" },
        { name: "Leg Raise", details: "Sets: 3", video: "leg_raise.mp4" },
        { name: "Russian Twist / Side Crunches", details: "Sets: 3", video: "russian_twist.mp4" }
    ],
    thursday: [
        { name: "Single Hand Overhead Extension", details: "Sets: 3", video: "single_hand_overhead_extension.mp4" },
        { name: "Barbell Skullcrusher", details: "Sets: 3", video: "barbell_skullcrusher.mp4" },
        { name: "Close Grip Bench Press", details: "Sets: 3", video: "close_grip_bench_press.mp4" },
        { name: "Cable Rope Pushdown", details: "Sets: 3", video: "cable_rope_pushdown.mp4" },
        { name: "777 Barbell Curl", details: "Sets: 3", video: "777_barbell_curl.mp4" },
        { name: "Inclined Dumbbell Curl", details: "Sets: 3", video: "inclined_dumbbell_curl.mp4" },
        { name: "Cable Rope Hammer Curl", details: "Sets: 3", video: "cable_rope_hammer_curl.mp4" }
    ],
    friday: [
        { name: "Sit-Ups", details: "Sets: 3", video: "sit_ups.mp4" },
        { name: "Leg Extension", details: "Sets: 3", video: "leg_extension.mp4" },
        { name: "Leg Press", details: "Sets: 3", video: "leg_press.mp4" },
        { name: "Forward Lunges", details: "Sets: 3", video: "forward_lunges.mp4" },
        { name: "Hamstring Curl", details: "Sets: 3", video: "hamstring_curl.mp4" },
        { name: "Calf Raises", details: "Sets: 3", video: "calf_raises.mp4" }
    ],
    saturday: [
        { name: "Dumbbell Press", details: "Sets: 3", video: "dumbbell_press.mp4" },
        { name: "Lateral Raise", details: "Sets: 3", video: "lateral_raise.mp4" },
        { name: "Cable Rope Face Pull", details: "Sets: 3", video: "cable_rope_face_pull.mp4" },
        { name: "Reverse Barbell Curl", details: "Sets: 3", video: "reverse_barbell_curl.mp4" },
        { name: "Back Wrist Curl", details: "Sets: 3", video: "back_wrist_curl.mp4" },
        { name: "Wrist Extension", details: "Sets: 3", video: "wrist_extension.mp4" },
        { name: "Wrist Curl", details: "Sets: 3", video: "wrist_curl.mp4" }
    ]
};

function showWorkout(day) {
    const container = document.getElementById('workout-container');
    container.innerHTML = ""; // Clear previous content

    const workouts = workoutPlans[day];
    if (workouts) {
        workouts.forEach(workout => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.className = 'exercise';

            exerciseDiv.innerHTML = `
                <h2>${workout.name}</h2>
                <p>${workout.details}</p>
                <video src="${workout.video}" autoplay loop muted></video>
            `;
            container.appendChild(exerciseDiv);
        });
    } else {
        container.innerHTML = `<p>No workout plan available for ${day}.</p>`;
    }
}
