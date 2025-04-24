import reflex as rx


def header_icons_item(text: str, icon: str, section_id: str) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.icon(icon),
            rx.text(text, size="4", weight="medium", class_name = "header_opt_text"),
        ),
        href=f"#{section_id}" if section_id else "/",  # Empty returns to top
        smooth=True,  # Enable smooth scrolling if your version supports it
    )


def header_content(device: str) -> rx.Component:
    return (
        rx.hstack(
            header_icons_item("Home", "home", "home"),
            header_icons_item("About", "info", "about"),
            header_icons_item("Register", "send", "register"),
            header_icons_item("Speakers", "speech", "speakers"),
            header_icons_item("Schedule", "calendar-check-2", "schedule"),
            header_icons_item("Contact", "mail", "contact"),
            spacing="6",
        )
        if device == "desktop"
        else rx.hstack(
            rx.menu.root(
                rx.menu.trigger(rx.icon("menu", size=30)),
                rx.menu.content(
                    header_icons_item("Home", "home", "home"),
                    header_icons_item("About", "info", "about"),
                    header_icons_item("Register", "send", "register"),
                    header_icons_item("Speakers", "speech", "speakers"),
                    header_icons_item(
                        "Schedule", "calendar-check-2", "schedule"),
                    header_icons_item("Contact", "mail", "contact"),
                ),
                justify="end",
            ),
        )
    )


def header() -> rx.Component:
    headingStr: str = "IDAAS"
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/logo.jpg",
                        width="2.25em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(headingStr, size="7", weight="bold"),
                    align_items="center",
                ),
                header_content("desktop"),
                justify="between",
                align_items="center",
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/logo.jpg",
                        width="2em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(headingStr, size="6", weight="bold"),
                    align_items="center",
                ),
                header_content("mobile"),
                justify="between",
                align_items="center",
            ),
        ),
        class_name = 'nav-bar',
        padding="1em",
        width="100%",
    )


def footer() -> rx.Component:
    return rx.box(
        rx.hstack(
            rx.text("© 2025 IDAAS. All rights reserved."),
            rx.hstack(
                rx.icon("twitter", cursor="pointer"),
                rx.icon("linkedin", cursor="pointer"),
                rx.icon("facebook", cursor="pointer"),
                spacing="4",
            ),
            justify="between",
            width="100%",
            max_width="1200px",
        ),
        width="100%",
        bg="rgba(0,0,0,0.1)",
        padding="2em",
        display="flex",
        justify_content="center",
    )
