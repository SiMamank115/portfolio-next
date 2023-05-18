import { useEffect, useState } from "react";

export default async function LoadImage(args) {
    for (var i = 0; i < args.length; i++) {
        await fetch(args[i]).then(async (e) => {
            await e.blob();
        });
        // images[i].src = preload.arguments[i];
    }
    return true;
}
