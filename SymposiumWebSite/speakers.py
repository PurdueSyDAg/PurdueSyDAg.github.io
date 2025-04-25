import reflex as rx


def speakers_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Keynote Speakers", size="6", mb="4"),
            rx.hstack(
                rx.card(
                    rx.image(src="/api/placeholder/400/400", alt="Speaker 1"),
                    rx.heading("Dr. Jane Smith", size="5"),
                    rx.text("Agricultural AI Researcher"),
                    width="250px",
                ),
                rx.card(
                    rx.image(src="/api/placeholder/400/400", alt="Speaker 2"),
                    rx.heading("Prof. John Davis", size="5"),
                    rx.text("Precision Farming Expert"),
                    width="250px",
                ),
                rx.card(
                    rx.image(src="/api/placeholder/400/400", alt="Speaker 3"),
                    rx.heading("Dr. Sarah Lee", size="5"),
                    rx.text("Digital Agriculture Specialist"),
                    width="250px",
                ),
                flex_wrap="wrap",
                justify="center",
                gap="6",
                width="100%",
            ),
            justify="center",
            min_height="80vh",
            padding_y="2em",
            spacing="8",
        ),
        id="speakers",
        width="100%",
        scroll_margin_top="5em",
    )
