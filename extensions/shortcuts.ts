import {detectCurrentScreen, getHoveringStuffId, Screens} from './utils';
declare var Mousetrap: {bind: Function, unbind: Function, reset: Function };

function bindEverything() {
    Mousetrap.reset();

    Mousetrap.bind('l', () => {
        if (detectCurrentScreen() === Screens.Clarify) {
            $('span[data-field="energy"][data-value="2"].active').trigger('click');
            $('span[data-field="energy"][data-value="1"]').trigger('click');
        }
    });

    Mousetrap.bind('h', () => {
        if (detectCurrentScreen() === Screens.Clarify) {
            $('span[data-field="energy"][data-value="1"].active').trigger('click');
            $('span[data-field="energy"][data-value="2"]').trigger('click');
        }
    });

    Mousetrap.bind('f', () => {
        // toggle focus during clarify
        if (detectCurrentScreen() === Screens.Clarify) {
            $('span[data-field="important"]').first().trigger('click');
        }
        // toggle focus star on task lists
        else if ($('#en_actions_list,#gl_stuff').length > 0) {
            $(':is(#en_actions_list, #gl_stuff) li:hover .sc_goal_and_area .focus_action').trigger('click');
        }
    });

    Mousetrap.bind('u', () => {
        if (detectCurrentScreen() === Screens.Clarify) {
            $('span[data-field="priority"]').first().trigger('click');
        }
    });

    Mousetrap.bind('a', () => {
        if (detectCurrentScreen() === Screens.Clarify) {
            $('#msc_area').parent().find('.select2').trigger('click');
        }
    });

    Mousetrap.bind('d', () => {
        if (typeof getHoveringStuffId() === 'number') {
            $(':is(#en_actions_list, #gl_stuff) li:hover .sc_command .command').trigger('click');
        }
    });

    Mousetrap.bind('t', () => {
        if (typeof getHoveringStuffId() === 'number') {
            // @ts-ignore
            _mse_save({
                url: '/stuff/' + getHoveringStuffId() + '/trash',
                type: 'PUT',
                data: {
                    after_controller: '/engage'
                }
            });
        }
    });

    Mousetrap.bind('w', () => {
        if (typeof getHoveringStuffId() === 'number') {
            // @ts-ignore
            _mse_save({
                url: '/stuff/' + getHoveringStuffId() + '/waiting',
                type: 'PUT',
                data: {
                    after_controller: '/engage'
                }
            });
        }
    });

    Mousetrap.bind('s', () => {
        if (typeof getHoveringStuffId() === 'number') {
            // @ts-ignore
            _mse_save({
                url: '/stuff/' + getHoveringStuffId() + '/someday',
                type: 'PUT',
                data: {
                    after_controller: '/engage'
                }
            });
        }
    });
}

// this is pretty fucked up. But somehow on some pages otherwise it doesn't work
setInterval(bindEverything, 1000);
