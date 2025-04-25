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
                mb="8",
            ),
            # Vision Section
            rx.hstack(
                rx.box(
                    rx.vstack(
                        rx.heading("Vision", size="4"),
                        rx.divider(width="40%"),
                        rx.text(
                            "Build a future where digital agriculture is impactful, intuitive, and accessible, making it easy to understand, simple to adopt, and useful for growers and stakeholders of all backgrounds.",
                            text_align="center",
                            padding="4",
                        ),
                        spacing="3",
                        border_radius="lg",
                        box_shadow="lg",
                        padding="6",
                        width="100%",
                    ),
                ),
                rx.box(
                    rx.vstack(
                        rx.heading("Mission", size="4"),
                        rx.divider(width="40%"),
                        rx.text(
                            "Create a hands-on, student-led symposium that makes digital agriculture approachable and easy to understand, offering interactive experiences, two-way conversations, and opportunities to explore real-world ag tech.",
                            text_align="center",
                            padding="4",
                        ),
                        spacing="3",
                        border_radius="lg",
                        box_shadow="lg",
                        padding="6",
                        width="100%",
                    ),
                ),
                rx.box(
                    rx.vstack(
                        rx.heading("Target Audience", size="4"),
                        rx.divider(border_color="#2D6A4F", width="40%"),
                        rx.text(
                            "Our target audience includes students, researchers, educators, and industry professionals in digital and precision agriculture. We welcome individuals from data science, engineering, agronomy, and environmental science interested in real-world applications and cross-sector collaboration. We especially focus on students and early-career professionals seeking skills and opportunities at the intersection of technology and agriculture.",
                            text_align="center",
                            padding="4",
                        ),
                        spacing="3",
                        border_radius="lg",
                        box_shadow="lg",
                        padding="6",
                        width="100%",
                    ),
                ),
                spacing="6",
                width="100%",
                flex_direction=["column", "column", "row"],
                align_items="stretch",
            ),
            justify="center",
            align_items="center",
            min_height="80vh",
            padding_y="2em",
            spacing="8",
            width="50%",
            margin_x="auto",
            display="flex",
        ),
        id="about",
        width="100%",
        justify="center",
        display="flex",
        justity_content="center",
        align_items="center",
        scroll_margin_top="5em",
    )
