"use client";

import { toScientific } from "@/utils/misc";
import { useRef, useMemo, useState } from "react";
import { BlockMath, InlineMath } from "react-katex";

export function ConstantCurrentCalculator() {
  const [q, setQ] = useState<number>(0);
  const [t, setT] = useState<number>(0);

  const i = useMemo(() => q / t, [q, t]);

  return (
    <div className="grid grid-cols-[auto_auto] gap-2">
      <label className="flex gap-2 justify-self-end">
        <InlineMath math="Q =" />
      </label>
      <input
        className="justify-self-start"
        value={q}
        onChange={(e) => setQ(+e.target.value)}
        type="number"
      />

      <label className="flex gap-2 justify-self-end">
        <InlineMath math="t =" />
      </label>
      <input
        className="justify-self-start"
        value={t}
        onChange={(e) => setT(+e.target.value)}
        type="number"
      />

      {t !== 0 && (
        <div className="col-span-2">
          <BlockMath math={String.raw`I = ${toScientific(i)}\ A`} />
        </div>
      )}
    </div>
  );
}
