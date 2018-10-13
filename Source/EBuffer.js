/*
 * Copyright 2018 Apple Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice,
 *       this list of conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice,
 *       this list of conditions and the following disclaimer in the documentation
 *       and/or other materials provided with the distribution.
 *
 *    3. Neither the name of the copyright holder nor the names of its
 *       contributors may be used to endorse or promote products derived from this
 *       software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
"use strict";

let eBufferCount = 0;
let canAllocateEBuffers = true;

class EBuffer {
    constructor(size)
    {
        if (!canAllocateEBuffers)
            throw new Error("Trying to allocate EBuffer while allocation is disallowed");
        this._index = eBufferCount++;
        this._array = new Array(size);
    }
    
    static setCanAllocateEBuffers(value, callback)
    {
        let oldCanAllocateEBuffers = canAllocateEBuffers;
        canAllocateEBuffers = value;
        try {
            return callback();
        } finally {
            canAllocateEBuffers = oldCanAllocateEBuffers;
        }
    }
    
    static disallowAllocation(callback)
    {
        return EBuffer.setCanAllocateEBuffers(false, callback);
    }
    
    static allowAllocation(callback)
    {
        return EBuffer.setCanAllocateEBuffers(true, callback);
    }
    
    get(index)
    {
        if (index < 0 || index >= this._array.length)
            throw new Error("Out of bounds buffer access (buffer = " + this + ", index = " + index + ")");
        return this._array[index];
    }
    
    set(index, value)
    {
        if (index < 0 || index >= this._array.length)
            throw new Error("out of bounds buffer access (buffer = " + this + ", index = " + index + ")");
        this._array[index] = value;
    }
    
    get index() { return this._index; }
    
    toString()
    {
        return "B" + this._index + ":[" + this._array + "]";
    }
}
