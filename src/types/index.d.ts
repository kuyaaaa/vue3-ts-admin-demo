import type { AxiosInstance } from "axios";
import type { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
import type { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
import type { Router } from "vue-router";

declare global {
    interface Window {
        $message: MessageApiInjection;
        $dialog: DialogApiInjection;
        $http: AxiosInstance;
        $router: Router;
    }
}
