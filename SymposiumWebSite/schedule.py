import reflex as rx


def schedule_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Schedule", size="6", mb="4"),
            rx.vstack(
                rx.hstack(
                    rx.text("09:00 - 10:00", font_weight="bold"),
                    rx.text("Opening Remarks & Keynote"),
                    justify="between",
                    width="100%",
                    max_width="800px",
                ),
                rx.hstack(
                    rx.text("10:15 - 11:30", font_weight="bold"),
                    rx.text("Panel: Digital Transformation in Agriculture"),
                    justify="between",
                    width="100%",
                    max_width="800px",
                ),
                rx.hstack(
                    rx.text("12:00 - 13:30", font_weight="bold"),
                    rx.text("Lunch & Networking"),
                    justify="between",
                    width="100%",
                    max_width="800px",
                ),
                rx.hstack(
                    rx.text("13:45 - 15:00", font_weight="bold"),
                    rx.text("Workshop: Real-world Applications"),
                    justify="between",
                    width="100%",
                    max_width="800px",
                ),
                rx.hstack(
                    rx.text("15:30 - 16:30", font_weight="bold"),
                    rx.text("Closing Discussion & Future Directions"),
                    justify="between",
                    width="100%",
                    max_width="800px",
                ),
                width="100%",
                max_width="800px",
                spacing="6",
            ),
            justify="center",
            min_height="80vh",
            padding_y="2em",
            spacing="8",
        ),
        id="schedule",
        width="100%",
        scroll_margin_top="5em",
    )
