export function detectCurrentScreen(): Screens | undefined {
    const active: string | undefined = $('.ft-nav-option.active').find('a').attr('id');
    switch (active) {
        case 'ft-capture':
            return Screens.Capture;
        case 'ft-clarify':
            return Screens.Clarify;
        case 'ft-engage':
            return Screens.Engage;
        default:
            return undefined;
    }
}

export function getHoveringStuffId(): number | null {
    return parseInt($(":is(#en_actions_list,#gl_stuff) li:hover").attr('id')?.substring(3) ?? 'you cant parse this');
}

export enum Screens {
    Capture,
    Clarify,
    Engage
}
