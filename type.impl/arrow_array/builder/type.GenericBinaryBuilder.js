(function() {
    var type_impls = Object.fromEntries([["arrow_array",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Write-for-GenericByteBuilder%3CGenericBinaryType%3CO%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_builder.rs.html#387-396\">Source</a><a href=\"#impl-Write-for-GenericByteBuilder%3CGenericBinaryType%3CO%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;O: <a class=\"trait\" href=\"arrow_array/array/trait.OffsetSizeTrait.html\" title=\"trait arrow_array::array::OffsetSizeTrait\">OffsetSizeTrait</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> for <a class=\"type\" href=\"arrow_array/builder/type.GenericBinaryBuilder.html\" title=\"type arrow_array::builder::GenericBinaryBuilder\">GenericBinaryBuilder</a>&lt;O&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.write\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_builder.rs.html#388-391\">Source</a><a href=\"#method.write\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#tymethod.write\" class=\"fn\">write</a>(&amp;mut self, bs: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Writes a buffer into this writer, returning how many bytes were written. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#tymethod.write\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_builder.rs.html#393-395\">Source</a><a href=\"#method.flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#tymethod.flush\" class=\"fn\">flush</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Flushes this output stream, ensuring that all intermediately buffered\ncontents reach their destination. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#tymethod.flush\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_vectored\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.36.0\">1.36.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1718\">Source</a></span><a href=\"#method.write_vectored\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_vectored\" class=\"fn\">write_vectored</a>(&amp;mut self, bufs: &amp;[<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/struct.IoSlice.html\" title=\"struct std::io::IoSlice\">IoSlice</a>&lt;'_&gt;]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Like <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#tymethod.write\" title=\"method std::io::Write::write\"><code>write</code></a>, except that it writes from a slice of buffers. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_vectored\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_write_vectored\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1733\">Source</a><a href=\"#method.is_write_vectored\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.is_write_vectored\" class=\"fn\">is_write_vectored</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>can_vector</code>)</span></div></span><div class='docblock'>Determines if this <code>Write</code>r has an efficient <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_vectored\" title=\"method std::io::Write::write_vectored\"><code>write_vectored</code></a>\nimplementation. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.is_write_vectored\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_all\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1795\">Source</a></span><a href=\"#method.write_all\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_all\" class=\"fn\">write_all</a>(&amp;mut self, buf: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Attempts to write an entire buffer into this writer. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_all\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_all_vectored\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1857\">Source</a><a href=\"#method.write_all_vectored\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_all_vectored\" class=\"fn\">write_all_vectored</a>(&amp;mut self, bufs: &amp;mut [<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/struct.IoSlice.html\" title=\"struct std::io::IoSlice\">IoSlice</a>&lt;'_&gt;]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>write_all_vectored</code>)</span></div></span><div class='docblock'>Attempts to write multiple buffers into this writer. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_all_vectored\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.write_fmt\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1910\">Source</a></span><a href=\"#method.write_fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_fmt\" class=\"fn\">write_fmt</a>(&amp;mut self, args: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Arguments.html\" title=\"struct core::fmt::Arguments\">Arguments</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Writes a formatted string into this writer, returning any error\nencountered. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.write_fmt\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.by_ref\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/std/io/mod.rs.html#1940-1942\">Source</a></span><a href=\"#method.by_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.by_ref\" class=\"fn\">by_ref</a>(&amp;mut self) -&gt; &amp;mut Self<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Creates a “by reference” adapter for this instance of <code>Write</code>. <a href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html#method.by_ref\">Read more</a></div></details></div></details>","Write","arrow_array::builder::BinaryBuilder","arrow_array::builder::LargeBinaryBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[10606]}