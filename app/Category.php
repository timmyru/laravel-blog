<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class Category extends Model
{
    protected $guarded = [];

    public function setSlugAttribute()
    {
        $this->attributes['slug'] = Str::slug(mb_substr($this->title, 0, 40) . "-" . Carbon::now()->format('dmyHi'), '-');
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
