import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, watch } from 'vue'

export const useOsn = defineStore('osnStore', {
    state: () => ({}),
    actions: {
        test(){
            console.log("test")
        }
    }
}
)