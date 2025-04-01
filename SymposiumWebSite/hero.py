import reflex as rx


def hero_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Institute of Digital and Advanced Agricultural systems (IDAAS) 1st Annual Symposium:",
                size="7",
                text_align="center",
            ),
            rx.text(
                "From Innovation to Real World Impact",
                size="8",
                text_align="center",
            ),
            rx.link(
                rx.button("Register Now"),
                href="#register",
                is_external=False,
            ),
            spacing="5",
            justify="center",
            align_items="center",
            height="90vh",
            width="100%",
        ),
        id="home",
        width="100%",
        bg="rgba(0,0,0,0.05)",
        _dark={"bg": "rgba(255,255,255,0.05)"},
        padding_y="2em",
    )
