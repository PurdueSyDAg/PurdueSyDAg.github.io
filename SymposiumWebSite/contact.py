import reflex as rx


def contact_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("Contact Us", size="6", mb="4"),
            rx.text(
                "Have questions about the symposium? Reach out to us.",
                max_width="600px",
                text_align="center",
                mb="4",
            ),
            rx.card(
                rx.vstack(
                    rx.hstack(
                        rx.icon("mail", mr="2"),
                        rx.text("symposium@idaas.org"),
                        align_items="center",
                    ),
                    rx.hstack(
                        rx.icon("phone", mr="2"),
                        rx.text("+1 (555) 123-4567"),
                        align_items="center",
                    ),
                    rx.hstack(
                        rx.icon("map-pin", mr="2"),
                        rx.text("IDAAS Conference Center, Agricultural University"),
                        align_items="center",
                    ),
                    width="100%",
                    align_items="start",
                    spacing="4",
                ),
                width="100%",
                max_width="600px",
            ),
            justify="center",
            min_height="50vh",
            padding_y="2em",
            spacing="8",
        ),
        id="contact",
        width="100%",
        scroll_margin_top="5em",
    )
