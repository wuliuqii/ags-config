import Dashboard from './dashboard/dashboard.js';
import FloatingDock from './dock/floatingDock.js';
import Notifications from './notifications/notifications.js';
import QuickSettings from './quicksettings/quickSettings.js';
import TopBar from './bar/topBar.js';
import { init } from './settings/setup.js';
import options from './options.js';

const windows = () => [
    FloatingDock(0),
    Notifications(0),
    TopBar(0),
    Dashboard(),
    QuickSettings(),
];

export default {
    onConfigParsed: init,
    windows: windows().flat(1),
    maxStreamVolume: 1.05,
    cacheNotificationActions: false,
    closeWindowDelay: {
        'quicksettings': options.transition.value,
        'dashboard': options.transition.value,
    },
};
