import reflex as rx


def hero_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "1st Annual Symposium of Digital Agriculture (SyDAG)",
                size="7",
                text_align="center",
            ),
            rx.text(
                "From Innovation to Impact",
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
        class_name="hero",
        padding_y="2em",
    )
