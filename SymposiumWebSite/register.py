import reflex as rx


def register_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Register", size="6", mb="4"),
            rx.card(
                rx.vstack(
                    rx.text(
                        "Complete the form below to register for the symposium", mb="4"
                    ),
                    rx.input(placeholder="Full Name", mb="3"),
                    rx.input(placeholder="Email", mb="3"),
                    rx.input(placeholder="Institution/Organization", mb="3"),
                    rx.select(
                        ["Academic", "Industry", "Government", "Student", "Other"],
                        placeholder="Attendee Type",
                        mb="3",
                    ),
                    rx.checkbox("I will attend in person", mb="3"),
                    rx.button("Submit Registration", width="100%"),
                    width="100%",
                    align_items="start",
                ),
                width="100%",
                max_width="600px",
            ),
            justify="center",
            min_height="80vh",
            padding_y="2em",
            spacing="8",
        ),
        id="register",
        width="100%",
        bg="rgba(0,0,0,0.05)",
        _dark={"bg": "rgba(255,255,255,0.05)"},
        scroll_margin_top="5em",
    )
