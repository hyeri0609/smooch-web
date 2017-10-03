import { combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import ConfigReducer from './config';
import ConversationReducer from './conversation';
import UIReducer from './ui';
import AppStateReducer from './app-state';
import AuthReducer from './auth';
import UserReducer from './user';
import PendingUserPropsReducer from './pending-user-props';
import FayeReducer from './faye';
import BrowserReducer from './browser';
import IntegrationsReducer from './integrations';

export default enableBatching(combineReducers({
    config: ConfigReducer,
    conversation: ConversationReducer,
    ui: UIReducer,
    appState: AppStateReducer,
    auth: AuthReducer,
    user: UserReducer,
    pendingUserProps: PendingUserPropsReducer,
    faye: FayeReducer,
    browser: BrowserReducer,
    integrations: IntegrationsReducer
}));
