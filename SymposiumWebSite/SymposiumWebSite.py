import reflex as rx
from reflex_motion import motion

from rxconfig import config
from SymposiumWebSite.about import about_section
from SymposiumWebSite.contact import contact_section
from SymposiumWebSite.hero import hero_section
from SymposiumWebSite.nav import footer, header
from SymposiumWebSite.register import register_section
from SymposiumWebSite.schedule import schedule_section
from SymposiumWebSite.speakers import speakers_section


class State(rx.State):
    """The app state."""

    pass


def apply_motion(content: rx.Component) -> rx.Component:
    """Wrap the given content in a reflex-motion component for a subtle fade & float-in effect."""
    return motion(
        content,
        initial={"opacity": 0, "y": 70},
        while_in_view={"opacity": 1, "y": 0},
        transition={"duration": 1.0, "ease": "easeOut"},
        # once=True,  # only animate the first time they enter the viewport
    )


def index() -> rx.Component:
    section_data = [
        (hero_section, "#f5f5f5"),  # light gray
        (about_section, "#ffffff"),  # white
        (register_section, "#f5f5f5"),
        (speakers_section, "#ffffff"),
        (schedule_section, "#f5f5f5"),
        (contact_section, "#ffffff"),  # light gray
    ]

    motion_sections = [
        apply_motion(
            rx.box(
                section_func(),
                overflow_x="hidden",
                width="100%",
                padding_x="2em",
                background=bg_color,
            )
        )
        for section_func, bg_color in section_data
    ]

    return rx.box(
        rx.script("document.documentElement.style.scrollBehavior = 'smooth'"),
        # Fixed navbar
        rx.box(
            header(),
            position="sticky",
            top="0",
            z_index="1000",
            width="100%",
        ),
        # Unpack all the motion sections
        *motion_sections,
        footer(),
        background=background_color,
        width="100%",
        spacing="0",
    )


# PEDRO - uncomment/comment these as you want to play with the styles.
# -Dr. Worm


# Option 1
primary_color = "#2c3e50"  # Navy/slate
secondary_color = "#ff4f00"  # weird gold/tangerine ish
accent_color = "#ddb945"


# Option 2
# primary_color = "#423629"
# secondary_color = "#7a9e1e"
# accent_color = "#ddb945"

# Option 3
# primary_color = "#756d54"
# secondary_color = "#3b9c9c"
# accent_color = "#ddb945"


background_color = "#ffffff"
text_color = "#000000"


# reflex is stupid in that it doesn't allow you to just simply theme using their in-built functionality unless
# you only want to use pre-set colors
# so you are also welcome to play with theeeeseee
# - Dr. Worm
style_sheets = [
    "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
    "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
    "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
    "https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap",
]
style = {
    # "font_family": {"Roboto"},
    "font_family": {"Roboto Mono"},
    # "font_family": {"Ubuntu"},
    # "font_family": {"Merriweather"},
    "::selection": {
        "background_color": accent_color,
    },
    ".text-primary": {
        "color": primary_color,
    },
    ".nav-bar": {"background_color": primary_color},
    ".hero": {
        "text_color": accent_color,
    },
    "#special-input": {
        "width": "20vw",
    },
    ".header_opt_text": {
        "color": background_color,
    },
    rx.button: {
        "background_color": accent_color,
        "color": text_color,
    },
    rx.text: {
        "color": text_color,
    },
    rx.heading: {
        "color": secondary_color,
    },
    rx.icon: {
        "color": accent_color,
        "stroke": accent_color,
    },
}


app = rx.App(style=style, stylesheets=style_sheets)
app.add_page(index)
