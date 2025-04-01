import reflex as rx


def about_section() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading("About", size="6", mb="4"),
            rx.text(
                "Join us for the first annual IDAAS symposium, where we bring together researchers, industry leaders, and innovators to explore the intersection of digital technology and agricultural systems.",
                max_width="800px",
                text_align="center",
            ),
            rx.text(
                "Our goal is to showcase practical applications that are making a real-world impact on sustainable agriculture.",
                max_width="800px",
                text_align="center",
                mt="4",
            ),
            justify="center",
            align_items="center",
            min_height="80vh",
            padding_y="2em",
            spacing="6",
        ),
        id="about",
        width="100%",
        scroll_margin_top="5em",
    )
