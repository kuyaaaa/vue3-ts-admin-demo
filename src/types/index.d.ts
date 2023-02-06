import { AxiosInstance } from "axios";
import { DialogApiInjection } from "naive-ui/lib/dialog/src/DialogProvider";
import { MessageApiInjection } from "naive-ui/lib/message/src/MessageProvider";
import { Router } from "vue-router";

declare global {
    interface Window {
        $message: MessageApiInjection;
        $dialog: DialogApiInjection;
        $http: AxiosInstance;
        $router: Router;
    }
}
